/**
 * 难度5-关卡73配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 73,
  name: '大师级-第73关',
  description: '挑战第73关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 60,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 14,
  gridRows: 6,
  gridCols: 8,
  difficulty: 5
};
