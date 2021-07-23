export default class CreepWork {
  static harvest(creep, target) {
    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target)
    };
  }

  static upgrade(creep, controller) {
    if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
      creep.moveTo(controller);
    }
  }

  static build(creep, constructionSite) {
    if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
      creep.moveTo(constructionSite);
    }
  }

  static withDraw(creep, target, source) {
    if (creep.withdraw(target, source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }

  static transfer(creep, target, source) {
    if (creep.transfer(target, source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }

  static repair(creep, target) {
    if(creep.repair(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}