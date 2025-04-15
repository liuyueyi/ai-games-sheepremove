/**
 * 难度1-关卡11配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 11,
  name: '新手入门-第11关',
  description: '挑战第11关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 9,
  maxSlots: 7,
  timeLimit: 170,
  maxLayers: 3,
  difficulty: 1
};
