import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Avatar from 'material-ui/Avatar';
import ActionBackup from 'material-ui/svg-icons/action/backup';
import ActionVoice from 'material-ui/svg-icons/action/settings-voice';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import { blue500, yellow600, pink300, green400, lightWhite, grey800 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const svgStyles = {
  fill: grey800,
};

export default class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="_menu">
        <FloatingActionButton className="action" onClick={this.handleToggle.bind(this)} backgroundColor={lightWhite}  mini={true}>
          <NavigationMenu style={svgStyles} />
        </FloatingActionButton>
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            <Link to="/" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<ActionBackup />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText="上传图片"
              />
            </Link>
            <Link to="/list" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                rightIcon={<ActionInfo />}
                primaryText="大图裁切"
              />
            </Link>
            <ListItem
              leftAvatar={<Avatar icon={<ActionVoice />} backgroundColor={pink300} />}
              rightIcon={<ActionInfo />}
              primaryText="图片示例"
            />
            <ListItem
              leftAvatar={<Avatar icon={<ActionVoice />} backgroundColor={pink300} />}
              rightIcon={<ActionInfo />}
              primaryText="注意事项"
            />
            <Link to="/about" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<ActionFavorite />} backgroundColor={green400} />}
                rightIcon={<ActionInfo />}
                primaryText="关于作者"
              />
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}
