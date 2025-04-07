/**
 * 难度2-关卡3配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 3,
  name: '初级挑战-第3关',
  description: '初级难度的最终挑战',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 3,
  maxSlots: 5,
  timeLimit: 140,
  maxLayers: 4,
  difficulty: 2
};