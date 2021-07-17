import CreepWork from "../CreepWork";

const roleHarvester = (creep) => {
  if (creep.memory.working) {
    let target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
    CreepWork.transfer(creep, target, RESOURCE_ENERGY);
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
      CreepWork.harvest(creep, target);
    } else {
      creep.memory.working = true;
    }
  }
}

export default roleHarvester;