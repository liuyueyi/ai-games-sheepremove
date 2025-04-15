/**
 * 难度1-关卡54配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 54,
  name: '新手入门-第54关',
  description: '挑战第54关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 33,
  maxSlots: 8,
  timeLimit: 127,
  maxLayers: 7,
  difficulty: 1
};
