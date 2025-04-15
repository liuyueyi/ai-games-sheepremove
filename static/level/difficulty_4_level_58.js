/**
 * 难度4-关卡58配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 58,
  name: '高级挑战-第58关',
  description: '挑战第58关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 48,
  maxSlots: 8,
  timeLimit: 103,
  maxLayers: 7,
  difficulty: 4
};
