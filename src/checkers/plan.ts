import premium from "../db_models/premium";
import keys from "../db_models/keys";

export const isNormal = async (key: string) => {
  const info = await keys.findOne({
    key: key,
  });
  if (!info) return false;
  else return true;
};

export const isPremium = async (key: string) => {
  const info = await premium.findOne({
    key: key,
  });

  if (!info) return false;
  else return true;
};

export const isPro = async (key: string) => {
  const info = await premium.findOne({
    key: key,
  });
  if (!info) {
    return false;
  }
  if (info.type !== "pro") {
    return false;
  }

  return true;
};

export const isUltra = async (key: string) => {
  const info = await premium.findOne({
    key: key,
  });
  if (!info) {
    return false;
  }
  if (info.type !== "ultra") {
    return false;
  }

  return true;
};

export const isBiz = async (key: string) => {
  const info = await premium.findOne({
    key: key,
  });
  if (!info) {
    return false;
  }
  if (info.type !== "biz") {
    return false;
  }

  return true;
};

export const isMega = async (key: string) => {
  const info = await premium.findOne({
    key: key,
  });
  if (!info) {
    return false;
  }
  if (info.type !== "mega") {
    return false;
  }

  return true;
};
