/**
 * 难度2-关卡1配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 1,
  name: '初级挑战-第1关',
  description: '难度提升，考验你的反应',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 160,
  maxLayers: 4,
  difficulty: 2
};