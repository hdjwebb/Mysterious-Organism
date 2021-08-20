// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
      //console.log(this.dna);
    },
    compareDNA(otherOrg) {
      let count = 0;
      for (let idx in this.dna) {
        if (this.dna[idx] === otherOrg.dna[idx]) {
           count++
        } else {
           count
        }
      }
      const percentageSimilar = (count/this.dna.length) * 100
      const percentageTo2Deci = percentageSimilar.toFixed(2);
      //console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`)
      return `${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`
    },
    willLikelySurvive() {
      const result = this.dna.filter(base => base === 'C' || base === 'G');
      return result.length / this.dna.length > 0.6;
    }
  }
};

const sharon = pAequorFactory(2, mockUpStrand())
const dave = pAequorFactory(1, mockUpStrand())
const pete = pAequorFactory(3, mockUpStrand())
const helen = pAequorFactory(4, mockUpStrand())

console.log(helen.compareDNA(dave))
console.log(helen.willLikelySurvive())
console.log(helen)
console.log(helen.mutate())
console.log(helen.compareDNA(pete))
console.log(helen.compareDNA(sharon))
console.log(pete.compareDNA(helen))
console.log(pete.compareDNA(pete))

