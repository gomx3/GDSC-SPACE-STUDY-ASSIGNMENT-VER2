import { useParams } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { formatDate } from '../../../utils/formatDate'

type DiaryDetailPageParams = {
    id: string
}

// 일기 더미 데이터
const dummyDiary: Diary = {
    id: '1',
    date: new Date(),
    title: '나의 일기',
    content: '오늘따라 거리에 사람이 없습니다. 이곳은 아포칼립스 세계관일까요?',
    emotion: 'soso',
    weather: 'cloud',
    views: 10,
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()

    return (
        <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
            <div className="w-1/2 h-full py-20">
                <div className="flex flex-col gap-4 my">
                    <h1 className="text-4xl font-medium">{dummyDiary.title}</h1>
                    <div className="flex flex-row">
                        <div>{formatDate(dummyDiary.date)}</div>
                        <div>{dummyDiary.weather}</div>
                        <div>{dummyDiary.emotion}</div>
                    </div>
                </div>
                <div>{dummyDiary.content}</div>
            </div>
        </div>
    )
}
