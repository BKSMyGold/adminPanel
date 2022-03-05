export const isValidRole = (role) => {
  if (role?.role_name && role?.permissions?.size) {
    return true;
  }
  return false;
};

export const isValidMetalGroup = (metalGroup) => {
  if (metalGroup?.fineness && metalGroup?.karatage && metalGroup?.referenceId) {
    return true;
  }
  return false;
};

export const isValidbuySell = (buysell) => {
  if (buysell?.sell && buysell?.buy) {
    return true;
  }
  return false;
};
export const isValidStandardPlan = (StandardPlan) => {
  if (StandardPlan?.name && StandardPlan?.cyclePeriod) {
    return true;
  }
  return false;
};

export const isValidCalculations = (Calculations) => {
  if (Calculations?.Type && Calculations?.Percentage) {
    return true;
  }
  return false;
};

export const isValidCyclePeriod = (cyclePeriod) => {
  if (
    cyclePeriod?.name &&
    cyclePeriod?.graceperiod &&
    cyclePeriod?.minValue &&
    cyclePeriod?.minWeight &&
    cyclePeriod?.shortName &&
    cyclePeriod?.cycle
  ) {
    return true;
  }
  return false;
};

export const isValidSlider = (slider) => {
  if (slider?.name && slider?.image && slider?.offerId) {
    return true;
  }
  return false;
};

export const isValidOffer = (Offer) => {
  if (Offer?.name && Offer?.image && Offer?.type) {
    return true;
  }
  return false;
};
export const isValidPermission = (Permission) => {
  if (Permission?.permission_name) {
    return true;
  }
  return false;
};

export const isValidDiamonds = (Diamonds) => {
  if (
    Diamonds?.shape &&
    Diamonds?.clarity &&
    Diamonds?.color &&
    Diamonds?.cut &&
    Diamonds?.certify_authority
  ) {
    return true;
  }
  return false;
};

export const isValidCategory = (Category) => {
  if (Category?.category_name && Category?.images.length && Category?.video) {
    return true;
  }
  return false;
};
export const isValidVariety = (variety) => {
  if (variety?.variety_name && variety?.images.length && variety?.video) {
    return true;
  }
  return false;
};

export const isValidCollection = (Collection) => {
  if (Collection?.collection_name && Collection?.images && Collection?.video) {
    return true;
  }
  return false;
};

export const isValidProduct = (Product) => {
  if (Product?.name && Product?.images.length && Product?.video) {
    return true;
  }
  return false;
};

export const isValidItem = (Item) => {
  if (Item?.name) {
    return true;
  }
  return false;
};
