import I18n from "I18n";
import computed from "discourse-common/utils/decorators";

export default Ember.Controller.extend({
  @computed
  title() {
    return I18n.t("anniversaries.today.title", {
      date: moment().format(I18n.t("dates.full_no_year_no_time")),
    });
  },

  actions: {
    loadMore() {
      this.get("model").loadMore();
    },
  },
});
