import CreepWork from "./CreepWork";

const roleRepairer = (creep) => {
  const walls = creep.room.find(FIND_STRUCTURES, {
    filter: { structureType: STRUCTURE_WALL },
  });

  let target = null;

  for (let wall of walls) {
    if ((wall.hits / wall.hitsMax) < 0.3) {
      target = wall;
      break;
    }
  }

  if (target) {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let newTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN
      })
      CreepWork.withDraw(creep, newTarget, RESOURCE_ENERGY);
    } else {
      creep.repair(target);
    }
  } else {
    CreepWork.upgrade(creep, creep.room.controller);
  }
}

export default roleRepairer;