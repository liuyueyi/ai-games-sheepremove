/**
 * 难度1-关卡8配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 8,
  name: '新手入门-第8关',
  description: '挑战第8关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 173,
  maxLayers: 3,
  difficulty: 1
};
