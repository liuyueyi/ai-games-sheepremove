/**
 * 难度1-关卡23配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 23,
  name: '新手入门-第23关',
  description: '挑战第23关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 4,
  maxSlots: 7,
  timeLimit: 158,
  maxLayers: 4,
  difficulty: 1
};
