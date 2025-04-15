/**
 * 难度1-关卡59配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 59,
  name: '新手入门-第59关',
  description: '挑战第59关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 122,
  maxLayers: 7,
  difficulty: 1
};
