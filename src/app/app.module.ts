import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { LobbyModule } from './lobby/lobby.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from 'primeng/api';
import Aura from '@primeng/themes/aura';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { GameHistoryModule } from './game-history/game-history.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GameHistoryModule,
    AppRoutingModule,
    LobbyModule,
    AuthModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
