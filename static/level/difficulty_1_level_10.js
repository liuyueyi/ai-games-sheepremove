/**
 * 难度1-关卡10配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 10,
  name: '新手入门-第10关',
  description: '挑战第10关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 171,
  maxLayers: 3,
  difficulty: 1
};
