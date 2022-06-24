import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/lessons/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>
        {availableDateFormatted}
      </span>

      <div className={`rounded border border-gray-500 
        p-4 mt-2 group-hover:border-green-500
        ${isActiveLesson ? 'bg-green-500' : ''}
      `}>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className={`text-sm font-medium flex
              items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'}
            `}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              EM BREVE
            </span>
          )}

          <span className={`text-xs rounded py-[0.125rem] px-2 text-white border
            font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}
          `}>
            {props.type === 'live' ? 'AO VIVO' : 'Aula Prática'}
          </span>
        </header>

        <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}