/**
 * 难度1-关卡78配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 78,
  name: '新手入门-第78关',
  description: '挑战第78关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 48,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 13,
  gridRows: 6,
  gridCols: 8,
  difficulty: 1
};
