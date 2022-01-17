import styles from '@/styles/members.module.css';
import type { MemberDataType } from '@/types/index';
import {
	Facebook as FacebookIcon,
	GitHub as GitHubIcon,
	Language as LanguageIcon,
	LinkedIn as LinkedInIcon,
	Twitter as TwitterIcon,
} from '@mui/icons-material';
import Searchable from '../Searchable';

export default function MembersUnderDomain(members: Array<MemberDataType>, role: string) {
	return members.map((member) => <Card member={member} role={role} key={member.id} />);
}
function Links({ member: { facebook, github, linkedin, twitter, website } }: ILinksProps) {
	return (
		<>
			{twitter && (
				<a href={twitter} target="_blank">
					<TwitterIcon className={` ${styles.fa} ${styles.fa_twitter}`} />
				</a>
			)}
			{github && (
				<a href={github} target="_blank">
					<GitHubIcon
						style={{ fontSize: 23 }}
						className={`${styles.fa} ${styles.fa_github}`}
					/>
				</a>
			)}
			{facebook && (
				<a href={facebook} target="_blank">
					<FacebookIcon className={`${styles.fa} ${styles.fa_facebook}`} />
				</a>
			)}
			{linkedin && (
				<a href={linkedin} target="_blank">
					<LinkedInIcon className={`${styles.fa} ${styles.fa_linkedin_square}`} />
				</a>
			)}
			{website && (
				<a href={website} target="_blank">
					<LanguageIcon className={`${styles.fa} ${styles.fa_website_square}`} />
				</a>
			)}
		</>
	);
}
function Card({ member, role }: ICard) {
	return (
		<>
			<div className={`${styles.member} `}>
				<div className={styles.imageWrap}>
					<img src={member.image.url} alt="Member photo" />
				</div>
				<div className={styles.info}>
					<span className={styles.school}>{member.name}</span>
					<span className={styles.state}>
						<Links member={member} />
					</span>
				</div>
				<Searchable name={member.name}>
					<div className={styles.teamInfo}>
						<h3>{member.name}</h3>
						<span>{role}</span>
					</div>
				</Searchable>
			</div>
		</>
	);
}

interface ICard {
	member: MemberDataType;
	role: string;
}

interface ILinksProps {
	member: MemberDataType;
}
