/* 
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
*/

/* ------------------------------------------------------------------------------- */

function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;

    hand.sort((a, b) => a - b);

    const map = new Map<number, number>();

    for (const card of hand) {
        map.set(card, (map.get(card) ?? 0) + 1);
    }

    for (const card of hand) {
        if (map.get(card) === 0) continue;

        for (let i = 0; i < groupSize; i++) {
            const currentCard = card + i;
            if (!map.get(currentCard)) return false;

            map.set(currentCard, (map.get(currentCard) as number) - 1);
        }
    }

    return true;
}

/*
T.C.: O(N * log(N))
S.C.: O(N)
*/
/* ------------------------------------------------------------------------------- */

const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
    groupSize = 3;

// const hand = [1, 2, 3, 4, 5],
//     groupSize = 4;

console.log(isNStraightHand(hand, groupSize));
