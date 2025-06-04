import { AppComponent } from "./app.component";

describe('AppComponent', () =>{
  it('should have defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
});