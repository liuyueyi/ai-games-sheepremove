/**
 * 难度2-关卡87配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 87,
  name: '初级挑战-第87关',
  description: '挑战第87关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 6,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 2
};
