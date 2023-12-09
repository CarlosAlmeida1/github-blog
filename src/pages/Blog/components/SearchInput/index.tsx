import { useForm } from 'react-hook-form';
import { SearchInputContainer } from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchSchema>;

interface SearchFormProps {
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ getPosts }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchSchema),
  });

  async function handleSearchPost(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type='text' placeholder='Buscar conteúdo' {...register('query')} />
    </SearchInputContainer>
  );
}
