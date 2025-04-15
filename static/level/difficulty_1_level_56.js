/**
 * 难度1-关卡56配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 56,
  name: '新手入门-第56关',
  description: '挑战第56关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 9,
  timeLimit: 125,
  maxLayers: 7,
  difficulty: 1
};
