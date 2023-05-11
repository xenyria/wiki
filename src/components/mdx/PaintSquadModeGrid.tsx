import Link from "next/link";

export function PaintSquadModeGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Mode
        name="Turf War"
        description="Cover the most turf with your color's ink to win!"
        slug="turf-war"
      />
      <Mode
        name="Deathmatch"
        description="Kill the most players from the opposite team to win!"
        slug="deathmatch"
      />
      <Mode
        name="Paintzones"
        description="Claim zones by painting them in your color to win!"
        slug="paintzones"
      />
      <Mode
        name="Eightball"
        description="Push the eightball to the enemy's goal to win!"
        slug="eightball"
      />
      <Mode
        name="Rainmaker"
        description="Fight for the rainmaker and take it to the enemy's goal to win!"
        slug="rainmaker"
      />
      <Mode
        name="Conquest"
        description="Conquer checkpoints and splat enemies to win!"
        slug="conquest"
      />
      <Mode
        name="Tower Control"
        description="Ride the tower to the enemy's goal to win!"
        slug="tower-control"
      />
      <Mode
        name="Clam Attack"
        description="Collect clams and throw them into the basket to fuel it!"
        slug="clam-attack"
      />
      <Mode
        name="Invasion"
        description="Fight waves of enemies and defeat the boss together with up to 3 other players to win!"
        slug="invasion"
        big
      />
    </div>
  );
}

function Mode({
  image,
  name,
  description,
  slug,
  big,
}: {
  image?: string;
  name: string;
  description: string;
  slug: string;
  big?: boolean;
}) {
  return (
    <Link
      className={`!border-none group ${big && "md:col-span-2"}`}
      href={`/paintsquad/${slug}`}
    >
      <div className="rounded-md overflow-hidden bg-white bg-opacity-5 transform scale-100 group-hover:scale[105%]">
        {image && (
          <div
            className={`bg-green-400 w-full ${
              big ? "aspect-[5/2] md:aspect-[4/1]" : "aspect-[5/2]"
            }`}
          />
        )}
        <div className="py-1 px-4 my-1">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className={`!m-0 text-lg ${big && "md:pr-32"}`}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
