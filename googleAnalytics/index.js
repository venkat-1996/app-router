export const googleAnalytics = (eventName, data) => {
  dataLayer.push({
    event: eventName,
    data,
  });
};
