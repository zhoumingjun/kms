import * as React from 'react';
import { connect } from 'react-redux';

import { Actions } from '../../Redux/Store/Demo/index';
import { ApplicationState } from '../../Redux/Store';

const mapStateToProps = (state: ApplicationState) => ({
  count: state.Demo.count
});

const mapDispatchToProps = {
  increase: Actions.increment,
  decrease: Actions.decrease,
  increase_async: Actions.increase_async,
};

type DemoProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class Demo extends React.Component<DemoProps> {
  public render(): JSX.Element {
    return <React.Fragment>{this.props.count}
      <button onClick={this.props.increase}>increase</button>
      <button onClick={this.props.increase_async}>increase_async</button>
      <button onClick={this.props.decrease}>decrease</button>
    </React.Fragment>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
