/**
 * 难度1-关卡1配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 1,
  name: '新手入门-第1关',
  description: '简单的入门关卡，熟悉游戏规则',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 3,
  maxSlots: 7,
  timeLimit: 180,
  maxLayers: 3,
  difficulty: 1
};