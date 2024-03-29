/**
 * @jsx React.DOM
 */

var Router = require('react-router-component'),
    AppsOverview = require('./AppsOverview'),
    AddApp = require('./AddApp'),
    AppPage = require('./AppPage'),
    Locations = Router.Locations,
    Location = Router.Location;

module.exports = React.createClass({

  render: function() {
    return (
      <Locations onBeforeNavigation={this.props.onBeforeNavigation} onNavigation={this.props.onNavigation}>
        <Location path="/" handler={AppsOverview} />
        <Location path="/apps/add" handler={AddApp} />
        <Location path="/apps/:app" handler={AppPage} />
      </Locations>
    )
  }
})

