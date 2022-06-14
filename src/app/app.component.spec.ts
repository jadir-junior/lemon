import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>
  const createComponent = createComponentFactory({
    component: AppComponent,
  })

  beforeEach(async () => (spectator = createComponent()))

  it('should create the app', () => {
    const app = spectator.component
    expect(app).toBeTruthy()
  })
})
