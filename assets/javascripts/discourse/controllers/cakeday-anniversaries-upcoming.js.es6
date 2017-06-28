import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  @computed
  title() {
    const date = moment();

    return I18n.t("anniversaries.upcoming.title", {
      start_date: date.add(1, 'days').format('MMMM Do'),
      end_date: date.add(6, 'days').format('MMMM Do'),
    });
  },

  actions: {
    loadMore() {
      this.get("model").loadMore();
    }
  }
});