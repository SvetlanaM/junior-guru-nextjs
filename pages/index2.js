import Tweet from '../components/Tweet';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default function Home(props) {
	return props.feed.map((feedItem) => (
		<Tweet key={feedItem.id} {...feedItem} />
	));
}

export const getServerSideProps = async () => {
	const feed = await prisma.tweet.findMany({
		where: { published: true },
	});
	return { props: { feed } };
};
