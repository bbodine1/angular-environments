import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'angular-environments-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <div id="welcome">
          <p>environment.production = {{ env }}</p>
          <p>environment.apiUrl = {{ apiUrl }}</p>
          <p>environment.secret = {{ secret }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  env = environment.production;
  apiUrl = environment.apiUrl;
  secret = environment.secret;
}
