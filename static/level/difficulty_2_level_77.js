/**
 * 难度2-关卡77配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 77,
  name: '初级挑战-第77关',
  description: '挑战第77关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 54,
  maxSlots: 9,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 2
};
