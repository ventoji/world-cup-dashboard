

//import { withKnobs} from '@storybook/addon-knobs';
export const parameters = {
  actions: { 
    argTypesRegex: "^on[A-Z].*" ,
    actions: {
      handles: ['change']
    }

  }
}

//  withKnobs(),
export const decorators = [
  (Story) => <div style={{ margin: '3em' }}><Story/></div>
];
