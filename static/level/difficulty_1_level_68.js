/**
 * 难度1-关卡68配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 68,
  name: '新手入门-第68关',
  description: '挑战第68关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 6,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
