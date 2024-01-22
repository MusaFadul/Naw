import { Injectable, ApplicationRef } from '@angular/core';
import { Observable, fromEvent, Subscription, BehaviorSubject } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

/**
 * Holds the different possible screen states.
 *
 * @export
 * @enum {number}
 */
export enum ScreenState {
  Mobile,
  Tablet,
  Desktop,
}

/**
 * Service which notices when the screen size changes and what kind of view
 * size is used new (@see ScreenState)
 *
 * @export
 * @class ScreenService
 */
@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  public isMobile = false;
  public isTablet = false;
  private basicScreenSizeChanged$: Observable<number> = null!;
  private screenSizeChangedSubject: BehaviorSubject<ScreenState> = null!;
  public screenSizeChanged$: Observable<ScreenState> = null!;

  constructor(private ref: ApplicationRef) {
    // Create observable from window resize event throttled so only fires every 500ms
    this.basicScreenSizeChanged$ = fromEvent(window, 'resize').pipe(
      throttleTime(500),
      map(this.getScreenWidth)
    );

    this.basicScreenSizeChanged$.subscribe((screenWidth: number) =>
      this.setScreenSettings(screenWidth)
    );
    this.setScreenSettings(this.getScreenWidth());
  }

  /**
   * Get current screen width.
   *
   * @returns
   */
  private getScreenWidth(): number {
    return document.body.offsetWidth;
  }

  /**
   * Get current screen state.
   *
   * @param screenWidth
   * @returns
   */
  private getScreenState(screenWidth: number): ScreenState {
    if (screenWidth < 768) {
      return ScreenState.Mobile;
    } else if (screenWidth <= 1366) {
      return ScreenState.Tablet;
    } else {
      return ScreenState.Desktop;
    }
  }

  /**
   * Handle screen state change.
   *
   * @private
   * @param screenWidth
   */
  private setScreenSettings(screenWidth: number) {
    const screenState = this.getScreenState(screenWidth);
    this.isMobile = screenState === ScreenState.Mobile;
    this.isTablet = screenState === ScreenState.Tablet;
    if (!this.screenSizeChangedSubject) {
      this.screenSizeChangedSubject = new BehaviorSubject<ScreenState>(
        screenState
      );
      this.screenSizeChanged$ = this.screenSizeChangedSubject.asObservable();
    } else {
      this.screenSizeChangedSubject.next(screenState);
    }

    if (this.ref && !(<any>this.ref)._runningTick) {
      this.ref.tick();
    }
  }

  /**
   * Regsier a function which shall be called on screen state change.
   *
   * @param onScreenChangeCallback
   * @returns
   */
  public register(
    onScreenChangeCallback: (isMobile: boolean, isTablet: boolean) => void
  ): Subscription {
    onScreenChangeCallback(this.isMobile, this.isTablet);
    return this.screenSizeChangedSubject.subscribe(
      (screenState: ScreenState) => {
        const isMobile = screenState === ScreenState.Mobile;
        const isTablet = screenState === ScreenState.Tablet;
        onScreenChangeCallback(isMobile, isTablet);
      }
    );
  }
}
