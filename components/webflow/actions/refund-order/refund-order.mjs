import webflow from "../../webflow.app.mjs";

export default {
  key: "webflow-refund-order",
  name: "Refund Order",
  description: "Refund a order",
  version: "0.1.1648564084",
  type: "action",
  props: {
    webflow,
    siteId: {
      propDefinition: [
        webflow,
        "sites",
      ],
    },
    orderId: {
      propDefinition: [
        webflow,
        "orders",
      ],
    },
  },
  async run({ $ }) {
    return this.webflow._makeRequest(`/sites/${this.siteId}/order/${this.orderId}/refund`, {
      $,
      config: {
        method: "post",
      },
    });
  },
};