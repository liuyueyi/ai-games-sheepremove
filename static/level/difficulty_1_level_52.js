/**
 * 难度1-关卡52配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 52,
  name: '新手入门-第52关',
  description: '挑战第52关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 33,
  maxSlots: 9,
  timeLimit: 129,
  maxLayers: 7,
  difficulty: 1
};
