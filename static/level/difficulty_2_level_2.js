/**
 * 难度2-关卡2配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 2,
  name: '初级挑战-第2关',
  description: '更多种类的卡片，更复杂的布局',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 150,
  maxLayers: 4,
  difficulty: 2
};