/**
 * 难度4-关卡37配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 37,
  name: '高级挑战-第37关',
  description: '挑战第37关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 7,
  timeLimit: 124,
  maxLayers: 7,
  difficulty: 4
};
