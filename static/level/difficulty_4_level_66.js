/**
 * 难度4-关卡66配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 66,
  name: '高级挑战-第66关',
  description: '挑战第66关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 6,
  maxSlots: 9,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 4
};
