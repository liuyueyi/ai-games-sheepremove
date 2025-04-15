/**
 * 难度4-关卡20配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 20,
  name: '高级挑战-第20关',
  description: '挑战第20关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 5,
  maxSlots: 6,
  timeLimit: 141,
  maxLayers: 5,
  difficulty: 4
};
