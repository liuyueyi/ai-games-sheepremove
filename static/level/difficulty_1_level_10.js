/**
 * 难度1-关卡10配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 10,
  name: '新手入门-第10关',
  description: '挑战第10关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 6,
  maxSlots: 7,
  timeLimit: 171,
  maxLayers: 7,
  gridRows: 4,
  gridCols: 6,
  difficulty: 1
};
