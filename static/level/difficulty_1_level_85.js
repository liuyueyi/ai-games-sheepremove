/**
 * 难度1-关卡85配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 85,
  name: '新手入门-第85关',
  description: '挑战第85关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 51,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 15,
  gridRows: 6,
  gridCols: 8,
  difficulty: 1
};
