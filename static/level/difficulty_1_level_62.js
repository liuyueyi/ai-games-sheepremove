/**
 * 难度1-关卡62配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 62,
  name: '新手入门-第62关',
  description: '挑战第62关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 39,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
