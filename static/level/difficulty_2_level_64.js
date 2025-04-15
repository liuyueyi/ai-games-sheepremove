/**
 * 难度2-关卡64配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 64,
  name: '初级挑战-第64关',
  description: '挑战第64关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 45,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 2
};
