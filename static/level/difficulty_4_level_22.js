/**
 * 难度4-关卡22配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 22,
  name: '高级挑战-第22关',
  description: '挑战第22关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 5,
  maxSlots: 7,
  timeLimit: 139,
  maxLayers: 5,
  difficulty: 4
};
